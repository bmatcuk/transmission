import * as React from 'react';

type Props = {};

class TitleScreen extends React.Component<Props> {
  createRoom = (event: SyntheticEvent<HTMLButtonElement>) => {
    (event.currentTarget: HTMLButtonElement);

    this.props.history.push('/lobby')
  }

  joinRoom = (event: SyntheticEvent<HTMLButtonElement>) => {
    (event.currentTarget: HTMLButtonElement);

    this.props.history.push('/join')
  }

  render() {

    return (
      <div className="title-screen screen">
        <h1>Soul Caster</h1>
        <div className="buttons">
          <button className="button create-room-button" type="button" onClick={ this.createRoom }>Create Room</button>
          <button className="button join-room-button" type="button" onClick={ this.joinRoom }>Join Room</button>
        </div>
      </div>
    );
  }
}

export default TitleScreen;