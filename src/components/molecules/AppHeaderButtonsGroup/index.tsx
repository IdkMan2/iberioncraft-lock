import {Box, Button, ButtonGroup} from "@material-ui/core";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutubeSquare, faDiscord, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

function AppHeaderButtonsGroup() {

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      <ButtonGroup color="primary">
        <Button
          variant={'contained'}
          color={'primary'}
          startIcon={<FontAwesomeIcon icon={faYoutubeSquare} />}
          href={'https://www.youtube.com/channel/UCcO7cWx1Mlals3JE0HUrWRA/videos?view_as=subscriber'}
          target={"_blank"}
        >
          YouTube
        </Button>
        <Button
          variant={'contained'}
          color={'primary'}
          startIcon={<FontAwesomeIcon icon={faFacebookSquare} />}
          href={'https://www.facebook.com/iberioncraft/'}
          target={"_blank"}
        >
          Facebook
        </Button>
        <Button
          variant={'contained'}
          color={'primary'}
          startIcon={<FontAwesomeIcon icon={faDiscord} />}
          href={'https://discord.gg/2Y8n45P'}
          target={"_blank"}
        >
          Discord
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default AppHeaderButtonsGroup;