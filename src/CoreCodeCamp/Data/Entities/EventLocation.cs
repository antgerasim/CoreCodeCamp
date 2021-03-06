﻿namespace CoreCodeCamp.Data
{
  public class EventLocation
  {
    public int Id { get; set; }
    public string Address1 { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Facility { get; set; }
    public string Link { get; set; }
    public string PostalCode { get; set; }
    public string StateProvince { get; set; }


    public string GetOneLineAddress()
    {
      return $"{Address1} {Address2}, {City},{StateProvince}  {PostalCode} {Country}";
    }
  }
}