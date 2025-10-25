from flask import Flask, render_template, redirect, url_for, request, flash

app = Flask(__name__, static_folder='static')


@app.route('/')
def serve_index():
    return render_template('index.html')


@app.route('/abstract')
def abstract():
    return render_template('abstract.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/dataset')
def dataset():
    return render_template('dataset.html')


@app.route('/survey')
def survey():
    return render_template('survey.html')


@app.route('/404')
def serve_404():
    return render_template('404.html')


if __name__ == '__main__':
    app.run(debug=True)
