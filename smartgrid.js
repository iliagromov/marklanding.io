module.exports = {
	columns: 12,
	offset: "0px",
	//mobileFirst: true,
	container: {
        maxWidth: "1920px",
        fields: "0px"
    },
	breakPoints: {
        mmd:{
            width: "1440px",
        },
        md:{
            width: "1024px",
            fields: "15px"
        },
		mdd: {
            width: "920px",
            fields: "15px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px",
            /*
            offset: "10px",
            fields: "5px"
            */
        }
	},
    //detailedCalc: true
};