interface ICardData {
    name: String;
    destination: String;
    duration: String;
    bestTime: String;
}

const TourCard = ({ cardData }: { cardData: ICardData }) => {
    return (
        <div className="w-[calc(100dvw/4)] border bg-cover bg-center bg-no-repeat">
            <h3>{cardData.name}</h3>
            <div>
                <p>{cardData.destination}</p>
                <p>{cardData.duration}</p>
                <p>{cardData.bestTime}</p>
            </div>
        </div>
    )
}

export default TourCard;