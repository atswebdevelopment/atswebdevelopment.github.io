# Skipper & Skipper

## Content Edit Guide

### Login
[LOCATION_ORIGIN/wp/wp-admin/]()

### Add/Edit Menu Pages
Go to __Appearance/Menus__, there you can edit/add/re-order the menu pages

[LOCATION_ORIGIN/wp/wp-admin/nav-menus.php]()

### Edit Site Title and Tagline
Go to __Settings/General__

[LOCATION_ORIGIN/wp/wp-admin/options-general.php]()

### Add Google Analytics
Go to __Options/General Tab__

![](https://s3-eu-west-1.amazonaws.com/vtimbuc/Screen-Shot-2018-06-19-11-48-34-AM-1529405314.png)

[LOCATION_ORIGIN/wp/wp-admin/admin.php?page=theme-settings]()

### Add/Edit Footer Social Icons
Go to __Options/Social Icons Tab__

![](https://s3-eu-west-1.amazonaws.com/vtimbuc/Screen-Shot-2018-06-19-11-47-45-AM-1529405265.png)

[LOCATION_ORIGIN/wp/wp-admin/admin.php?page=theme-settings]()

### Edit Home Page
Go to __Pages/Home__, there you will find a tab for each section of the page

![](https://s3-eu-west-1.amazonaws.com/vtimbuc/Screen-Shot-2018-06-19-11-26-43-AM-1529404003.png)

[LOCATION_ORIGIN/wp/wp-admin/post.php?post=8&action=edit]()

### Edit About Page
Go to __Pages/About__, there you will find a tab for each section of the page

![](https://s3-eu-west-1.amazonaws.com/vtimbuc/Screen-Shot-2018-06-19-11-29-38-AM-1529404178.png)

[LOCATION_ORIGIN/wp/wp-admin/post.php?post=13&action=edit]()

### Edit Services Page
Go to __Pages/Services__, there you will find a tab for each section of the page

![](https://s3-eu-west-1.amazonaws.com/vtimbuc/Screen-Shot-2018-06-19-11-32-06-AM-1529404327.png)

[LOCATION_ORIGIN/wp/wp-admin/post.php?post=15&action=edit]()

### Edit Work Page
Go to __Pages/Work__, there you will find a tab for each section of the page

![](https://s3-eu-west-1.amazonaws.com/vtimbuc/Screen-Shot-2018-06-19-11-36-23-AM-1529404583.png)

[LOCATION_ORIGIN/wp/wp-admin/post.php?post=11&action=edit]()

To add/edit the projects go to __Portfolio__

[LOCATION_ORIGIN/wp/wp-admin/edit.php?post_type=portfolio]()

<script>
  var links = document.querySelectorAll('a');

  links.forEach(function(link) {
    var url = link.innerHTML.replace('LOCATION_ORIGIN', window.location.origin);

    link.innerHTML = url;
    link.href = url;
  });
</script>
