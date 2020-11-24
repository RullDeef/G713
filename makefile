build:
	py ./builder.py; \
	py -m jsmin ./build/app.js > ./build/app.min.js
