import React from 'react';
import { ScrollView } from 'react-native';
import DistributorCard from '../../../Components/DistibutorCard'; 

const DistributorsList = () => {
  const distributors = [
    {
      name: 'Jessica Brown',
      location: 'New York, USA',
      contact: '+1 (123) 456-7890',
      imageUri: 'https://example.com/jessica.jpg',
    },
    {
      name: 'Michael Johnson',
      location: 'London, UK',
      contact: '+44 20 7946 0958',
      imageUri: 'https://example.com/michael.jpg',
    },
    {
      name: 'Samuel Garcia',
      location: 'Madrid, Spain',
      contact: '+34 91 123 4567',
      imageUri: 'https://example.com/samuel.jpg',
    },
  ];

  return (
    <ScrollView>
      {distributors.map((distributor, index) => (
        <DistributorCard
          key={index}
          name={distributor.name}
          location={distributor.location}
          contact={distributor.contact}
          imageUri={distributor.imageUri}
          onPress={() => console.log(`${distributor.name}'s details`)}
        />
      ))}
    </ScrollView>
  );
};

export default DistributorsList;
