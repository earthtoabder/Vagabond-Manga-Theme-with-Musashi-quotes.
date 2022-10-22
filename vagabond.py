from bs4 import BeautifulSoup
import requests

url= "https://quotecatalog.com/communicator/miyamoto-musashi"

def down_quote():
	with open("quotes.txt","a+") as file:
		file.write(quote+"\n")

result = requests.get(url)
page = BeautifulSoup(result.text, "html.parser")

quotes = page.find_all(class_="block p-5 font-serif md:text-lg quoteCard__blockquote")
for quote in quotes:
		quote= quote.text.strip()
		quote = quote.replace(quote[0],'"')
		quote = quote.replace(quote[len(quote)-1], '"')
		down_quote()
		print("Done!")


