"""Serveur local pour tester le site : python serveur.py, puis ouvrir http://127.0.0.1:8000

Contrairement à "python -m http.server", il interdit la mise en cache par le
navigateur : un simple rafraîchissement suffit à voir les modifications.
"""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class SansCache(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    print("Site disponible sur http://127.0.0.1:8000 (Ctrl+C pour arrêter)")
    ThreadingHTTPServer(("127.0.0.1", 8000), SansCache).serve_forever()
