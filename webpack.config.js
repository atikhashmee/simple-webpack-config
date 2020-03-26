    
    
    
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