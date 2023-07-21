# CSS:

- ID (#) – `$('#username')`
- Class (.) – `$('.username'')`
- TagName[attribute=’value’] – `input[name='username']`

# XPath:

- `//tagname[@attribute='value']`
- `//input[@type='password']`

# Selectors Plugins:

- SelectorsHub & ChroPath
- Go through how to install & use the above. But need to check they work, because on some sites they don't
- It's a good idea to verify your selectors are correct by entering them into one of these plugins

# Multiple Elements have the same locator:

- If the selector you're using returns multiple elements, & you want to store all returned elements, you need to use `$$`
- If the selector you're using returns multiple elements, & you only use `$`, then only the 1st element will be returned up
