using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace TravelWebService.Model
{
    public class Reservations
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Date")]
        public DateTime Date { get; set; }

        [BsonElement("Time")]
        public string Time { get; set; } = string.Empty;

        [BsonElement("StartingPoint")]
        public string StartingPoint { get; set; } = string.Empty;

        [BsonElement("EndingPoint")]
        public string EndingPoint { get; set; } = string.Empty;

        [BsonElement("AvailableTrains")]
        public int AvailableTrains { get; set; }

        [BsonElement("PassengerName")]
        public string PassengerName { get; set; } = string.Empty;

        [BsonElement("PassengerNIC")]
        public string PassengerNIC { get; set; } = string.Empty;

        [BsonElement("PassengerAge")]
        public int PassengerAge { get; set; }

        [BsonElement("Gender")]
        public string Gender { get; set; } = string.Empty;

        [BsonElement("DoB")]
        public string DoB { get; set; } = string.Empty;

        [BsonElement("ContactNo")]
        public string ContactNo { get; set; } = string.Empty;

        [BsonElement("Email")]
        public string Email { get; set; } = string.Empty;

        [BsonElement("AdditionalMembers")]
        public string AdditionalMembers { get; set; } = string.Empty;
    }
}
