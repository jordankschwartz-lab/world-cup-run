"""Local test server that sends the same headers as Netlify (read from _headers).

Usage: python serve.py [port]   (default 8765), then open http://localhost:8765
"""
import http.server
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent


def load_headers():
    headers = []
    for line in (ROOT / "_headers").read_text(encoding="utf-8").splitlines():
        if line.startswith((" ", "\t")) and ":" in line:
            name, value = line.strip().split(":", 1)
            # upgrade-insecure-requests would push localhost to https, which has no server
            value = value.replace("; upgrade-insecure-requests", "")
            headers.append((name.strip(), value.strip()))
    return headers


class Handler(http.server.SimpleHTTPRequestHandler):
    HEADERS = load_headers()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        for name, value in self.HEADERS:
            self.send_header(name, value)
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    print(f"Serving on http://localhost:{port}")
    http.server.ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
