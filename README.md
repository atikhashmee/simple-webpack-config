WEBPACK
----------------------------------

at first install  webpack  and    webpack-cli globally, by running the command 
```
npm install -g webpack webpack-cli
```

to bundle up the code you can start by running the code
```
webpack app.js --o bundle.js --mode=development/production 
```

if its hindering for you to run this command every time to get the updated code on you browsers you can pass the --watch command, it will give you realtime bundling option 
```
webpack app.js --o bundle.js --mode=development --watch
```

or we can use loader also. such as style-loader/css-loader

```
npm i -D css-loader style-loader
```

and then add it to your require like this 
```
require('!style-loader!css-loader!./style.css')
```

and you are fine. reload the page and you will see the effect

and now the part of everything that is done by a configuration file 
look at the code below
```
module.exports = {
        
        entry:'./app.js',
        output:{
            path:__dirname,
            filename:'bundle.js',
        },
        module:{   //for all types of loaders
            rules:[
                {
                    test:/\.css$/,
                    use:[
                        { 
                            loader: 'style-loader' 
                        },
                        {
                            loader: 'css-loader'
                        },
                    ]
                },
            ]
        }
    }
```