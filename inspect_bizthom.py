import urllib.request
import ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request(
    'https://urban-finds.mybizthom.com/menstrual-relief-belt',
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

with urllib.request.urlopen(req, context=ctx) as resp:
    soup = BeautifulSoup(resp.read().decode('utf-8', errors='ignore'), 'html.parser')

print("Title:", soup.title.string if soup.title else '')

# Find forms and links
for form in soup.find_all('form'):
    print("Form action:", form.get('action'), "method:", form.get('method'))
    for inp in form.find_all(['input', 'button']):
        print("  input:", inp.get('name'), inp.get('type'), inp.get('value'))

# Find text containing Naira
for el in soup.find_all(text=lambda t: t and ('₦' in t or 'NGN' in t or '21' in t or '28' in t)):
    print("Price match:", el.strip())

