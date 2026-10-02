
import { useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
Pressable,
} from "react-native";

const students = [
{
id: "s1",
name: "Ana Cruz",
course: "IT313",
units: 21,
isFullLoad: true,
},
{
id: "s2",
name: "Bea Santos",
course: "IT313",
units: 15,
isFullLoad: false,
},
{
id: "s3",
name: "Cid Ramos",
course: "IT313",
units: 18,
isFullLoad: true,
},
{
id: "s4",
name: "Dex Alonzo",
course: "IT313",
units: 12,
isFullLoad: false,
},
];

function StudentCard({
name,
course,
units,
isFullLoad,
}: {
name: string;
course: string;
units: number;
isFullLoad: boolean;
}) {
return (
<View style={styles.card}>
<Text style={styles.name}>{name}</Text>

<Text>Course: {course}</Text>

<Text>Units: {units}</Text>

{isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
</View>
);
}

export default function StudentRoster() {
const [roster, setRoster] = useState(students);

const reverseRoster = () => {
setRoster([...roster].reverse());
};

return (
<ScrollView contentContainerStyle={styles.container}>
<Text style={styles.title}>Student Roster</Text>

<Text style={styles.count}>
{`${roster.length} students`}
</Text>

<Pressable style={styles.button} onPress={reverseRoster}>
<Text style={styles.buttonText}>Reverse Roster</Text>
</Pressable>

{roster.map((student) => (
<StudentCard
key={student.id}
name={student.name}
course={student.course}
units={student.units}
isFullLoad={student.isFullLoad}
/>
))}
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
padding: 20,
paddingTop: 60,
},

title: {
fontSize: 28,
fontWeight: "bold",
marginBottom: 5,
},

count: {
fontSize: 18,
marginBottom: 15,
},

button: {
backgroundColor: "#007AFF",
padding: 14,
borderRadius: 10,
alignItems: "center",
marginBottom: 20,
},

buttonText: {
color: "white",
fontSize: 16,
fontWeight: "bold",
},

card: {
padding: 20,
marginBottom: 12,
borderRadius: 10,
backgroundColor: "#eeeeee",
},

name: {
fontSize: 20,
fontWeight: "bold",
marginBottom: 8,
},

fullLoad: {
marginTop: 8,
fontWeight: "bold",
},
})