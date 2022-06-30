---
title: "Why CSS sucks, and how to avoid the frustation when dealing with CSS."
desc: "CSS, also known as Castading Style Sheet, is a pretty much the de-facto standard when it comes to decorating the web. CSS is probably one of the first thing that you touched when you are learning web development. However, as a guy who already got my hands dipped into the messy soup of web development, I will say one thing: CSS sucks. Here's why."
goto: "/blogs/why-css-sucks"
imageSrc: "/images/blogs/why-css-sucks/css-is-awesome.png"
imageAlt: "why-css-sucks"
released: "28-06-2022"
modified: "28-06-2022"
---

[Image source](https://dev.to/vicainelli/css-is-awesome-3dca).

CSS, also known as Castading Style Sheet, is pretty much the de-facto standard when it comes to decorating the web. CSS is probably one of the first thing that you touched when you are learning web development. However, as a guy who already got my hands dipped into the messy soup of web development, I will say one thing: CSS sucks.

I am not the only one who has this opinion, hundreds of web developers already said the same thing. Remember when you are trying so hard to override a property that is inherited from a parent element, only to find out that you can not do that? Remember overlapping boxes? I am pretty sure that you have the same opinion. Hell, some people even thought that CSS is bad by design to protect the app stores. So, this article is going to explain to you about why CSS sucks.

## The concept of CSS:

CSS has 2 main concepts that you need to understand:

### CSS will show UI errors, and will not do anything to make to hide those errors or to make those errors 'features'. 

Still don't understand? I am going to explain the meaning of this statement.

For example, take a look at this html code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS sucks</title>
</head>
<body>
    <div style="width: 100px; background-color: black; color: green;">
        This text is incredibly long as hell. Super longggggggggggggggggggggggg.
    </div>
</body>
</html>
```

What you will get is this:

![overlapping-box](/images/blogs/why-css-sucks/demo-1.png)

Yes, I know that the number one rule is that try to use relative units (percent, viewport width, viewport height, etc) -- But that is not the point. The point I am trying to talk here is that CSS is not trying to hide the error. There is a solution, you can use ```overflow: auto``` so that the browser automatically adds a scrollbar. That is why you encounter so many graphical errors when working with CSS.

### CSS revolves around boxes.

CSS treats every element as a 'box'. There is an area called margin, which acts as a 'spacer' between elements, and padding, which acts as a 'spacer' between the element's border and the content. Boxes can overlap eachother.

### CSS is cascading.

Parent element's properties will be it's child element's property (If the child element doesn't explicitly set it's property). That is called inheritence. And is the most important core concept in the world of CSS.

## Then, why CSS sucks?

There are 2 reasons:

### Cascading concepts are executed so poorly.

For example, if a parent element sets a property called ```text-decoration``` ```none```, it's child element can not override the ```text-decoration``` value. Why? Because W3C said so! There are several properties that you can not override. It is frustating, you can try to use ```<span>```, but in my recent project, it fails. You can not avoid this.

### Margin and padding are like magic when there are multiple elements.

The concept of margin and padding are simple. But, when there are multiple elements, you got a really confusing graphical errors, and then, you ended up doing the trial and error method by setting the values of margin, padding, width, and height. The only way to avoid this kind of stuff is by using the browser's builtin devtools, and by understanding the 'box' concept.

### Backwards compabillity.

Sometimes you have to set 4 different values just to make sure that your website supports multiple browsers.

<br>

If you want to make sure that you are not frustated, I suggest you to use Bootstrap of Tailwind if you are a professional who wants to build a website in a non-lengthy time. But if you want to learn CSS, use vanilla CSS, no pain, no gain!