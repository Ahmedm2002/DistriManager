import React, { useEffect, useState } from "react";
import AdminNavigator from "./src/Admin/Navigation/AdminNavigator";
import DistributorNavigation from "./src/Distributors/Navigation/DistributorNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App() {
  const [user, setUser] = useState(null);
  const getUserRole = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      if (jsonValue != null) {
        setUser(JSON.parse(jsonValue));  
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserRole();
  }, []);

  return (
    // user === null ? <DistributorNavigation /> : <AdminNavigator />
    <AdminNavigator />
    // <DistributorNavigation />
  );
}

export default App;
