import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Select from '../select';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  children: JSX.Element;
}

interface NameFilterProps {
  name: string;
  setName: (value: string) => void;
}

interface DimensionFilterProps {
  dimension: string;
  setDimension: (value: string) => void;
}

interface TypeFilterProps {
  type: string;
  setType: (value: string) => void;
}

interface SpeciesFilterProps {
  species: string;
  setSpecies: (value: string) => void;
}

interface GenderFilterProps {
  gender: string;
  setGender: (value: string) => void;
}
interface StatusFilterProps {
  status: string;
  setStatus: (value: string) => void;
}

interface EpisodeFilterProps {
  episode: string;
  setEpisode: (value: string) => void;
}

export default function Filter({children}: Props) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Filter</Text>
        <TouchableOpacity onPress={toggleCollapsed} style={styles.button}>
          {!collapsed && <Icon name="plus-circle" size={20} />}
          {collapsed && <Icon name="minus-circle" size={20} />}
        </TouchableOpacity>
      </View>
      {collapsed && children}
    </View>
  );
}

Filter.NameFilter = ({name, setName}: NameFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <TextInput
        placeholder="Enter name"
        placeholderTextColor="gainsboro"
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />
    </View>
  );
};

Filter.DimensionFilter = ({dimension, setDimension}: DimensionFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <TextInput
        placeholder="Enter dimension"
        placeholderTextColor="gainsboro"
        style={styles.textInput}
        value={dimension}
        onChangeText={setDimension}
      />
    </View>
  );
};

Filter.SpeciesFilter = ({species, setSpecies}: SpeciesFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <TextInput
        placeholder="Enter species"
        placeholderTextColor="gainsboro"
        style={styles.textInput}
        value={species}
        onChangeText={setSpecies}
      />
    </View>
  );
};

Filter.TypeFilter = ({type, setType}: TypeFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <TextInput
        placeholder="Enter Type"
        placeholderTextColor="gainsboro"
        style={styles.textInput}
        value={type}
        onChangeText={setType}
      />
    </View>
  );
};

Filter.GenderFilter = ({gender, setGender}: GenderFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <Select
        value={gender}
        setValue={setGender}
        values={['male', 'female', 'unknown']}
        title="gender"
      />
    </View>
  );
};

Filter.StatusFilter = ({status, setStatus}: StatusFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <Select
        value={status}
        setValue={setStatus}
        values={['dead', 'alive', 'unknown']}
        title="status"
      />
    </View>
  );
};

Filter.EpisodeFilter = ({episode, setEpisode}: EpisodeFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <TextInput
        placeholder="Enter Episode"
        placeholderTextColor="gainsboro"
        style={styles.textInput}
        value={episode}
        onChangeText={setEpisode}
      />
    </View>
  );
};
