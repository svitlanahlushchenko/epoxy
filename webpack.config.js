const path = require('path');

module.exports = {
  entry: './src/index.js', // Твой основной файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Загрузка SCSS файлов
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Вставка стилей в HTML
          'css-loader', // Обработка CSS
          'sass-loader', // Компиляция SCSS
        ],
      },
      // Загрузка шрифтов
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'fonts/', // Сохранение шрифтов в папке fonts
            },
          },
        ],
      },
    ],
  },
};
