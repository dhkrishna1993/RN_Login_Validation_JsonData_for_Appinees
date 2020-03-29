import React, { useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useSelector} from 'react-redux';

export default function Details() {

	const [tableHead] = useState(['Name', 'Gender', 'Age', 'Phone', "email"])

	const employeData = useSelector((state) => state.employeData)
	
	const apiDetails = () => {
		//console.log(employeData)
		if (employeData) {
			return <View >
				<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
					<Row data={tableHead} style={styles.head} textStyle={styles.text} />
					{employeData.user.map((item, index) => (
						<Rows key={index}
							data={[[item.name, item.gender, item.age, item.phoneNo, item.email]]}
							textStyle={styles.text} />
					)
					)
					}
				</Table>
			</View>

		} else {
			return <Text>Loading...</Text>
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Employee Details</Text>
			{apiDetails()}
		</View>
	);
}
const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
	head: { height: 40, backgroundColor: '#f1f8ff' },
	text: { margin: 6 },
	header: { alignSelf: 'center', fontSize: 25, color: '#697689', margin: 10 }
});