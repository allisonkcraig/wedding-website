import random

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    """Show our index page."""

    return render_template("login.html")

@app.route('/eat-drink-be-married')
def index():
    """Show our index page."""

    return render_template("home.html")


if __name__ == "__main__":
    app.run(debug=True)