module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    "file-loader",
                    {
                            loader: "image-webpack",
                            options: {
                                gifsicle: {
                                    interlanced: false
                                },
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};