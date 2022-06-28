/*

  ./enviroment.d.ts

  Copyright (C) 2022, Anokidev. This file is 
  part of Anokidev's website. Anokidev's website 
  is open-source and is licensed in MIT License.

  This file is used to define enviroment variables types.

*/

declare global {

  namespace NodeJS {

    interface ProcessEnv {

      SUPABASE_URL: string;
      SUPABASE_KEY: string;
      NODE_ENV:     'development' | 'production';

      PORT?:        string;
      PWD:          string;

    };

  };

};
  
// Convert the file into a module by adding an empty export statement.
export {}