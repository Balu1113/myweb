from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['loginUsername']
        password = request.form['loginPassword']

        # Implement your login logic here
        # Check username and password against your database or any authentication mechanism

        # For simplicity, let's just print the entered username and password
        print(f'Login attempt with username: {username}, password: {password}')

        return redirect('/')

    return render_template('balulogin.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['regUsername']
    email = request.form['regEmail']
    password = request.form['regPassword']

    # Implement your registration logic here
    # Store the user information in your database

    # For simplicity, let's just print the entered information
    print(f'Registration attempt with username: {username}, email: {email}, password: {password}')

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False)  # Disable Flask's built-in server
