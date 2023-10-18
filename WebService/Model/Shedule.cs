using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

public class Shedule
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required]
    public string StartTime { get; set; } = string.Empty;

    [Required]
    public string EndTime { get; set; } = string.Empty;

    [Required]
    public string StartingStation { get; set; } = string.Empty;

    [Required]
    public string EndingStation { get; set; } = string.Empty;

    [Required]
    public double Duration { get; set; }

    [Required]
    public string TrainEngine { get; set; } = string.Empty;

    [Required]
    public string TrainName { get; set; } = string.Empty;

    [Required]
    public int AvailableSeats { get; set; }

    public string SpecialNotices { get; set; } = string.Empty;
}
