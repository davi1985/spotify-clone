import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const SongCurrentInfo = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const SongTitle = styled.span`
  font-size: 13px;
  color: #fff;
`;

export const Artist = styled.small`
  font-size: 11px;
  color: #b3b3b3;
  margin-top: 5px;
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: 0;
  margin: 0 15px;
`;

export const Icon = styled.img``;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Span = styled.span`
  font-size: 11px;
  color: #b3b3b3;
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;

  @media (max-width: 1000px) {
    width: 320px;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;
`;

export const VolumeIconContainer = styled.img`
  margin-right: 5px;
`;
