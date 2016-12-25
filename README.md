# dev-react-component
A minimalistic boilerplate for developing a react component as an NPM package.

For this boilerplate, I am trying to be as minimalistic as possible. No testing. No linting. You get to decide how to bring those in yourself. All this boilerplate does is get you developing and publishing as fast as possible.

# How to use

1. Clone this repo into a folder of your choice:

  ```
  git clone https://github.com/adrianmcli/dev-react-component.git my-new-component
  ```

2. Run `yarn` or `npm install` inside the directory that was just created.
3. Change the `name`, `version`, and `description` inside `package.json`.
4. Start developing your component inside `src/index.js`.
5. Run `npm publish` to publish your component.

# Developing Your Component

Here you have two choices:

1. Create your own "example" page that pulls in the component from `src/index.js` and load it up with React and all of its dependencies, or;
2. Checkout the `storybook` branch of this repo and use [React Storybook](https://github.com/storybooks/react-storybook) with its built-in development environment to start building your component.

The first option will probably require you to install a build tool (like [Webpack](https://webpack.github.io/) or [Brunch](http://brunch.io/) and setup all the dependencies you require to have a simple dev server capable of building a react app.

The second option is much more hands off, but many people like to build their own dev environment, especially if there are specific things they want to showcase. Since this is a minimalistic boilerplate, I have left the option up to you.

# Warning

This boilerplate only produces a transpiled CommonJS version of the component in a `lib` folder with `babel-cli`. This should be sufficient if users of your package have a Webpack build step to compile their react app.

UMD compilation may be added later or in a separate branch in order to support standalone usage in the future. See this [issue](https://github.com/adrianmcli/dev-react-component/issues/2) for more details.
