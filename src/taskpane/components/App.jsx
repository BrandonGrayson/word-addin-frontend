import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import HeroList from "./HeroList";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props) => {
  // destructuring title from props
  const { title } = props;
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={title} message="Cobblestone Add-in" />
      <HeroList message="Below is a list of contract templates to choose from" />
    </div>
  );
};
// app props
App.propTypes = {
  title: PropTypes.string,
};

export default App;
