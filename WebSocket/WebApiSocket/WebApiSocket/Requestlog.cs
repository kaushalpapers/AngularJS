﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace WebApiSocket
{
    public class Requestlog : Hub
    {
        public static void PostToClient(string data)
        {
            try
            {
                var chat = GlobalHost.ConnectionManager.GetHubContext("Requestlog");
                if (chat != null)
                    chat.Clients.All.postToClient(data);
            }
            catch
            {
            }
        }
    }
}