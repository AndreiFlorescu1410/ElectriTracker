using ElectriTrackerService.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;


namespace ElectriTrackerService.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TrackerController : ApiController
    {
        [HttpGet]
        public SkiData[] GetAllInformation()
        {
            /*
            Format mesaj:
            "Nume,Latitudine,Longitudine,Baterie,Status,Urgenta,Telefon"
             * Status: 0=liber; 1=ocupat; 2=indisponibil
             * Urgenta: 0=nu; 1=da
            */
            List<string> items = new List<string>();
      List<SkiData> items2 = new List<SkiData>();

            using (SqlConnection myConnection = new SqlConnection(DbConnectionString))
            {
                
                var db = new SkiLessonsDatabaseEntities();
                var admin = db.skiTable.FirstOrDefault(i => i.IsAdmin == 1);
                    double result2 = (double)admin.Latitudine;
                    double result22 = (double)admin.Longitudine;
                int isadmin;
                if (admin != null)
                    isadmin = 1;
                else
                    isadmin = 0;
                myConnection.Open();

                SqlCommand myCommand = new SqlCommand("Select * From [skiTable] ", myConnection);
                SqlDataReader myReader = myCommand.ExecuteReader();

                while (myReader.Read())
                {
                    {
                        
                        int status = 2; 
                        double result1 = (double)myReader["Latitudine"];
                        double result11 = (double)myReader["Longitudine"];


                        double R = 6371000; // metres
                        double φ1 = (Math.PI / 180) * result1;
                        double φ2 = (Math.PI / 180) * result2;
                        double Δφ = Math.Abs((Math.PI / 180) * (result1 - result2));
                        double Δλ = Math.Abs((Math.PI / 180) * (result22 - result11));

                        double a = Math.Sin(Δφ / 2) * Math.Sin(Δφ / 2) +
                                Math.Cos(φ1) * Math.Cos(φ2) *
                                Math.Sin(Δλ / 2) * Math.Sin(Δλ / 2);
                        var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));

                        var d = R * c;
                        int InAfaraRazei=0;
                        if (d > 2000)
                           InAfaraRazei = 1;
                        
                        if (myReader["Status"] != null && myReader["Status"] != DBNull.Value)
                        {
                            status = (int)myReader["Status"];
                        }



            var skidata = new SkiData() { name = "ccc", phone = "yyy" };
            items2.Add(skidata);
            //string deAfisat1 = Newtonsoft.Json.JsonConvert.SerializeObject(skidata);
            string deAfisat = "{ name=" + myReader["Nume"].ToString() + ",latitude=" + myReader["Latitudine"] + ",longitude=" + myReader["Longitudine"] + ",batery=" + myReader["Baterie"] + ",status=" + status + ",emergency=" + myReader["Urgenta"] + ",phone" + myReader["Telefon"] + ",speed=" + '0' + ",isAdmin=" + isadmin + ",outOfRange=" + InAfaraRazei+"}";
            //JObject json = JObject.Parse(this.deAfisat);
            //items.Add(deAfisat1);
                    }
                }
            }
      //return items.ToArray();
      return items2.ToArray();
    }
        [HttpPost]
        public string SendAllInformation([FromBody]string information)
        {
            /*
            Format mesaj:
            "Nume,Latitudine,Longitudine,Baterie,Status,Urgenta"
                * Status: 0=liber; 1=ocupat
                * Urgenta: 0=nu; 1=da
             * "Sorin Peste,44.87405309180625,25.629332788207837,15,0,0",
            */
            information = HttpContext.Current.Request["information"];
            char[] delimiterChars = { ',' };
            string[] words = information.Split(delimiterChars);

            using (SqlConnection myConnection = new SqlConnection(DbConnectionString))
            {
                myConnection.Open();

                SqlCommand myCommand = new SqlCommand("UPDATE [skiTable] SET  Latitudine = " + words[1] + ", Longitudine = " + words[2] + ", Baterie= " + words[3] + ", Status  = " + words[4] + ", Urgenta = " + words[5] + " WHERE Nume = '" + words[0] + "'", myConnection);
                myCommand.ExecuteNonQuery();

            }
            return "OK";
        }

        [HttpPost]
    public void RegisterUser([FromBody]UserRegistrationModel model)
        {
            using (SqlConnection myConnection = new SqlConnection(DbConnectionString))
            {
                myConnection.Open();

                SqlCommand myCommand = new SqlCommand("UPDATE [skiTable] SET  Telefon = '" + model.Telephone + "' WHERE Nume = '" + model.FirstName + "'", myConnection);
                int rows = myCommand.ExecuteNonQuery();

                if (rows == 0)
                {
                    myCommand = new SqlCommand("INSERT INTO [skiTable] (Nume, Telefon,IsAdmin) VALUES ('" + model.FirstName + "','" + model.Telephone + "','" + model.IsAdmin + "')", myConnection);
                    myCommand.ExecuteNonQuery();
                }

            }
    }

        [HttpPost]
        public string test(string userdata)
        {
            //userdata = HttpContext.Current.Request["userdata"];
            char[] delimiterChars = { ',' };

            string[] words = userdata.Split(delimiterChars);

            
            return "OK";
        }

        public static string DbConnectionString = "Server=tcp:ski.database.windows.net,1433;Database=SkiLessonsDatabase;User ID=skiadmin@ski;Password=parola123?;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    private string deAfisat;
  }

}