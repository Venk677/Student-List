# Studend Records

Displaying the student records which includes first name, last name and skills. So here I have used django and ReactJs for the project.

A full stack application was built using ReactJs and django. Used REST Api for communicating from backend to frontend.

Prerequisites

You need to install the following packages for backend:

'''
asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0
'''

Installing

Clone the repository

'''
https://github.com/Venk677/Student.list.git
'''

Setting up your virtual environment:

'''
python3 -m venv .env
'''

Activating Virtual Environment

'''
source .env/bin/activate
'''

Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Student-Record/backend/) is and type the following code in your terminal:

'''
pip install requirements.txt
'''

Then to run the server and type the following code in terminal:

'''
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
'''

Your server is set up with all the APIs active.

For Frontend which is ReactJS, Dependencies are:
'''
"axios": "^0.19.0",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-redux": "^7.1.3",
"react-router-dom": "^5.1.2",
"redux": "^4.0.4",
"react-scripts": "0.9.5"
'''

Go to 'Student-Record/student/' and type the following code in the terminal:

'''
npm install
'''

Then to run the react server, type the code:

'''
npm start
'''

The server has been set up and you are ready to go. While navigating through UI.

P.S:The aesthetics of the page is at the most basic level. Some more work could be put in to beautify the UI. The project has been completed keeping the sole aim as working completion rather than aesthetically pleasing.
