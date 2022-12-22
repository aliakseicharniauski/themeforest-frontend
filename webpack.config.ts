import path from 'path'
import {
    Configuration as WebpackConfiguration,
    HotModuleReplacementPlugin,
    WebpackPluginInstance,
} from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

enum Mode {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/assets/favicon.ico',
    }),
    new ForkTsCheckerWebpackPlugin({
        async: false,
    }),
    new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
]

let mode: Mode = Mode.DEVELOPMENT
let output

if (process.env.NODE_ENV === 'production') {
    mode = Mode.PRODUCTION
    plugins.push(new CleanWebpackPlugin())
    output = {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    }
} else if (process.env.NODE_ENV === 'development') {
    plugins.push(new HotModuleReplacementPlugin())
    output = {
        publicPath: '/',
    }
}

console.log('mode', mode)

const config: Configuration = {
    mode,
    output,
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    plugins,
    devtool: mode === Mode.DEVELOPMENT && 'inline-source-map',
    devServer:
        mode === Mode.DEVELOPMENT
            ? {
                  static: path.join(__dirname, 'build'),
                  historyApiFallback: true,
                  port: 4000,
                  open: true,
                  hot: true,
              }
            : undefined,
}

export default config
