﻿using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TravelWebService.Model;

namespace TravelWebService.Services
{
    public class TrainService
    {
        private readonly IMongoCollection<train> _trainCollection;

        public TrainService(
            IOptions<UserDatabaseSettings> userDatabaseSettings)
        {
            var mongoClient = new MongoClient(
               userDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                userDatabaseSettings.Value.DatabaseName);

            _trainCollection = mongoDatabase.GetCollection<train>(
                userDatabaseSettings.Value.trainCollectionName);
        }

        public async Task<List<train>> GetAsync() =>
           await _trainCollection.Find(_ => true).ToListAsync();

        public async Task<train?> GetAsync(string id) =>
            await _trainCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(train newTrain) =>
            await _trainCollection.InsertOneAsync(newTrain);

        public async Task UpdateAsync(string id, train updatedTrain) =>
            await _trainCollection.ReplaceOneAsync(x => x.Id == id, updatedTrain);

        public async Task RemoveAsync(string id) =>
            await _trainCollection.DeleteOneAsync(x => x.Id == id);


    }
}
