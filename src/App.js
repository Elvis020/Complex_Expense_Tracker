import React,{useRef,useEffect} from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details";
import Main from "./components/Main";
import useStyles from "./styles";

// For SPeechly
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import {SpeechState, useSpeechContext} from '@speechly/react-client';

const App = () => {
  const trackerUI = useStyles();
  const {speechState} = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();


  useEffect(() => {
    if(speechState === SpeechState.Recording){
      executeScroll();
    }
  },[speechState])


  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        className={trackerUI.grid}
        alignItems="center"
        justify="center"
        style={{ height: "100vh", padding: "5%" }}
      >
        <Grid className={trackerUI.mobile} item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} md={3} className={trackerUI.main}>
          <Main />
        </Grid>
        <Grid className={trackerUI.desktop} item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={trackerUI.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </React.Fragment>
  );
};

export default App;
