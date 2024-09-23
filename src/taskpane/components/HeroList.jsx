import * as React from "react";
import PropTypes from "prop-types";
import { tokens, makeStyles } from "@fluentui/react-components";
// component styles
const useStyles = makeStyles({
  list: {
    marginTop: "20px",
  },
  listItem: {
    paddingBottom: "20px",
    display: "flex",
  },
  icon: {
    marginRight: "10px",
  },
  itemText: {
    fontSize: tokens.fontSizeBase300,
    fontColor: tokens.colorNeutralBackgroundStatic,
  },
  welcome__main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  message: {
    fontSize: tokens.fontSizeBase500,
    fontColor: tokens.colorNeutralBackgroundStatic,
    fontWeight: tokens.fontWeightRegular,
    paddingLeft: "10px",
    paddingRight: "10px",
  },
});

const HeroList = (props) => {
  //prop to be pased to HeroList component when called
  const { message } = props;
  // component state for templates and setter function
  const [templates, setTemplates] = React.useState([]);
  const styles = useStyles();

  //fetching the data should be done inside a useEffect, this effect doesn't depend on any variable
  // so the array is empty. this effect will only run on the initial render
  React.useEffect(() => {
    // fetch teamplates is an async function since you need to wait for the request to finish
    const fetchTemplates = async () => {
      // wrapping the request inside a try catch block to handle any possible errors when fetching the data
      try {
        // the request to get the data from the server. Currently this returns undefined
        // const response = await fetch("https://localhost:3001/templates", {
        //   method: "GET",
        //   headers: { "Content-Type": "application/json" },
        // });

        // console.log("data", data);
        // this is where you would call setTemplates and pass in the data from the response. Since it returns udefined
        // I'm just setting the array to what would be returned by the server.
        // the server sends the response I checked using postman. So I believe the problem has to do with making a request
        // inside Word
        setTemplates([
          { id: 1, name: "Basic Contracts", description: "A basic Word template" },
          { id: 2, name: "Advanced Contract", description: "A more advanced Word template" },
          { id: 3, name: "Business Contract", description: "A business report template" },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTemplates();
  }, []);

  // async function that interacts with the word document to insert contract templates.
  const handleContractInsert = async (template) => {
    await Word.run(async (context) => {
      const docBody = context.document.body;
      docBody.clear();
      docBody.insertParagraph(template.description, Word.InsertLocation.start);
    });
  };

  // mapping over the templates and rendering a list item and button element
  const contractTemplates = templates.map((template) => (
    <li key={template.id} className={styles.listItem}>
      {/* passing a function to onClick so that I can pass the template variable being mapped over */}
      <button onClick={() => handleContractInsert(template)} value={template.description} className={styles.itemText}>
        {template.name}
      </button>
    </li>
  ));
  return (
    <div className={styles.welcome__main}>
      <h2 className={styles.message}>{message}</h2>
      <ul className={styles.list}>{contractTemplates}</ul>
    </div>
  );
};
// props the HeroList componet expects to receive
HeroList.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HeroList;
