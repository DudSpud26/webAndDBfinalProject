# webAndDBfinalProject
Project for Web and Database Programming

DogMeet will be a place for people to make Tinder-esque profiles for their dogs and to set up doggie play dates with other pets in their area. Human users will be able to upload a picture of their dog and display their dog's name, age, and up to five personality traits. To make sure everyone's doggie profile can only be edited by the owner, users will have to register and login. The register page will take in info like first name, last name, email, password, etc. Here is a screenshot showing what it looks like to register.

![image](https://user-images.githubusercontent.com/91347543/168333638-bb52b56e-1c72-4dd7-8f82-c937d2f37a09.png)

After registering once, users will then need to login each time they visit the page for security reasons. Here is a screenshot of what that login page looks like. It uses the same basic style as the register page to give a feeling of familiarity. 

![image](https://user-images.githubusercontent.com/91347543/168333973-640e69e0-7da4-4167-badc-19e5b33425a3.png)

After succesfully logging in, users will land at their profile page, which will be blank for newly registered users. However, in the navigation bar there will be a option to edit profile, right between messages and logout.

![image](https://user-images.githubusercontent.com/91347543/168334489-91e37fc5-c426-45e7-aa77-fb89d3e15200.png)

The edit profile page has 3 seperate forms to make future changes less of a hassle. All of the information submitted in these forms will be stored in an SQL database and will dynamically appear on the profile pages once entered. 

![image](https://user-images.githubusercontent.com/91347543/168334725-6c77e0af-e4e8-45f7-a2aa-d33867f1f6ea.png)

I have not been successful in getting the profile data to save to its own SQL table, but, if it was working, below is what a typical profile page would look like.

![image](https://user-images.githubusercontent.com/91347543/168335095-1e81b2f1-7041-4dc4-820c-f35ab1a0dfd8.png)

After I get the profiles data to save, I will make sure the javascript that adds the data to the profile page using innerHTML is working. After that I would like to add the ability to send messages between users and add the ability to add other dogs as friends into a interactive friends list. 


