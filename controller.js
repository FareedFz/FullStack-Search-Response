var FileSystem = require('fs');
var searchResponse = {};
var search = function (req, res) {
   // var searchResponse ={};
   FileSystem.readFile('../baOneway.json', 'utf8', function (err, data) {//utf8 is for encoded file to data;  
      var searchResponse = JSON.parse(data);
      var segment = {}
      var OfferLists          =  searchResponse.AirShoppingRS.OffersGroup.AirlineOffers.Offer
      var DataLists           =  searchResponse.AirShoppingRS.DataLists
      var TotalPrice          =  [];
      var SegmentRefs         =  [];
      var array               =  [];
      var FlightSegmentLists  =  [];
      var Passenger           =  [];
      var FlightList          =  [];
      var SegmentLength       = DataLists.FlightSegmentList.FlightSegment.length
      //SegmentDetails
      for (var i = 0; i < SegmentLength; i++) {
         
         var SegmentKey  =  DataLists.FlightSegmentList.FlightSegment[i].attributes.SegmentKey;

         FlightSegmentLists[SegmentKey]=DataLists.FlightSegmentList.FlightSegment[i]
      }
      
      
//PassengerDetails
      for (var i = 0; i < 3; i++) {
         var PassengerKey=DataLists.PassengerList.Passenger[i].attributes.PassengerID; 
         Passenger[PassengerKey]=DataLists.PassengerList.Passenger[i];
         
       }
     //FlightLists
       var Flights=DataLists.FlightList.Flight.length;
       for (var i = 0; i < Flights; i++) {
         var FlightKey=DataLists.FlightList.Flight[i].attributes.FlightKey;
         FlightList[FlightKey]=DataLists.FlightList.Flight[i];
       
       }
   
    //Price
     
      for (var i = 0; i < OfferLists.length; i++) {

         TotalPrice=(OfferLists[i].TotalPrice.SimpleCurrencyPrice.content);
      }
      for (var i = 6; i < 7; i++) {
         SegmentRefs=(OfferLists[i].OfferItem[0].FareDetail.FareComponent.SegmentRefs)
         array[SegmentRefs]=SegmentRefs.split(" ")
        // console.log(FlightSegmentLists[SegmentRefs])
 
       }
      
   });
   
}

module.exports = { search: search }