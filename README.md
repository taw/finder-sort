Sort file names in order meaningful for humans (inspired by OSX Finder).

So `cat9.jpg` comes before `cat10.jpg`, it's case insensitive except as tie-breaker, is aware of multi-part paths and so on.

### Installation

```
    npm install finder-sort
```

### Usage

```
    import finderSort from "finder-sort";

    finderSort(arrayOfFiles);
```

For more complex scenacios, you can pass key function as second argument.
For example if you want to sort array of objects by their `fileName` property, you can do:

```
    import finderSort from "finder-sort";

    finderSort(arrayOfObjects, (obj) => obj.fileName);
```
