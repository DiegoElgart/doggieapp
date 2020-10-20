/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dogs', {
		dogId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'dog_id'
		},
		dogName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'dog_name'
		},
		sex: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'sex'
		},
		age: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'age'
		},
		weight: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'weight'
		},
		neutered: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'neutered'
		}
	}, {
		tableName: 'dogs'
	});
};
