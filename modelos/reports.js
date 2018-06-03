/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', {
    Report_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    Ts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Asset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Dev_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Server_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Frame_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Latitude: {
      type: "DOUBLE",
      allowNull: true
    },
    Longitude: {
      type: "DOUBLE",
      allowNull: true
    },
    Speed: {
      type: "DOUBLE",
      allowNull: true
    },
    Heading: {
      type: "DOUBLE",
      allowNull: true
    },
    GPS_Fixed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Satellites: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Power_Volt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Backup_Volt: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reports'
  });
};
