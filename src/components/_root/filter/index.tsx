import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';

interface Props {
  children: JSX.Element;
}

interface NameFilterProps {
  name: string;
  setName: (value: string) => void;
}

interface TypeFilterProps {
  type: string;
  setType: (value: string) => void;
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
          {!collapsed && <Text style={styles.actionText}>+</Text>}
          {collapsed && <Text style={styles.actionText}>-</Text>}
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
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />
    </View>
  );
};

Filter.TypeFilter = ({type, setType}: TypeFilterProps) => {
  return (
    <View style={styles.filterContainer}>
      <TextInput
        placeholder="Enter Type"
        style={styles.textInput}
        value={type}
        onChangeText={setType}
      />
    </View>
  );
};
