import {
  Container,
  Current,
  Image,
  SongCurrentInfo,
  SongTitle,
  Artist,
  Progress,
  Controls,
  ButtonIcon,
  Icon,
  Time,
  ProgressSlider,
  Span,
  Volume,
  VolumeIconContainer,
} from './styles';

import Slider from 'rc-slider';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

export const Player = () => {
  // TODO - estilizando HEADER
  return (
    <Container>
      <Current>
        <Image
          src="https://i.pinimg.com/originals/19/f6/82/19f682a67a7ca726d0fe49653288b5e5.jpg"
          alt="Cover"
        />

        <SongCurrentInfo>
          <SongTitle>A beautiful exchange</SongTitle>

          <Artist>Hillsong</Artist>
        </SongCurrentInfo>
      </Current>

      <Progress>
        <Controls>
          <ButtonIcon>
            <Icon src={ShuffleIcon} alt="Shuffle" />
          </ButtonIcon>

          <ButtonIcon>
            <Icon src={BackwardIcon} alt="Backward" />
          </ButtonIcon>

          <ButtonIcon>
            <Icon src={PlayIcon} alt="Play" />
          </ButtonIcon>

          <ButtonIcon>
            <Icon src={ForwardIcon} alt="Forward" />
          </ButtonIcon>

          <ButtonIcon>
            <Icon src={RepeatIcon} alt="Repeat" />
          </ButtonIcon>
        </Controls>

        <Time>
          <Span>1:39</Span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed607' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>

          <Span>4:24</Span>
        </Time>
      </Progress>

      <Volume>
        <VolumeIconContainer src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          // value={100}
        />
      </Volume>
    </Container>
  );
};
