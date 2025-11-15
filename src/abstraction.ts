abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;



}

class MostafaPlayer extends MediaPlayer{
    play(): void {
        console.log(`Playing Music.....`)
        
    }
    pause(): void {
        console.log(`Music is Paused.......`)
    }
    stop(): void {
        console.log(`Music is Stop.......`)
    }
}

let testPlaer_1 = new MostafaPlayer();
testPlaer_1.play();