import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const database = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((res, rej) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
        [],
        () => {
          res();
        },
        (_, error) => {
          rej(error);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = (place) => {
  const promise = new Promise((res, rej) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES(?, ?, ?, ?, ?)`,
        [place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
        (_, result) => {
          console.log(result);
          res(result);
        },
        (_, error) => {
          rej(error);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((res, rej) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const places = [];

          for (const dp of result.rows._array) {
            places.push(new Place(dp.title, dp.imageUri, { address: dp.address, lat: dp.lat, lng: dp.lng }, dp.id));
          }

          res(places);
        },
        (_, error) => {
          rej(error);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaceDetails = (id) => {
  const promise = new Promise((res, rej) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [id],
        (_, result) => {
          const dbPlace = result.rows._array[0];
          const response = new Place(
            dbPlace.title,
            dbPlace.imageUri,
            { address: dbPlace.address, lat: dbPlace.lat, lng: dbPlace.lng },
            dbPlace.id
          );
          res(response);
        },
        (_, error) => {
          rej(error);
        }
      );
    });
  });

  return promise;
};
