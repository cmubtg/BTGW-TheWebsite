from flask import Flask, render_template, request
application = Flask(__name__)

@application.route('/')
def index():
	return render_template("index.html")

@application.route('/team')
def team():
	return render_template("team.html")


if __name__ == '__main__':
	application.run(host="0.0.0.0", port = "5000")
