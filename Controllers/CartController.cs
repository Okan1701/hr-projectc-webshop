using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using klaas.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using klaas.products;
using Microsoft.EntityFrameworkCore;
using MailKit.Net.Smtp;
using MimeKit;


namespace LearnASPNETCoreMVCWithRealApps.Controllers
{
    [Route("cart")]
    public class CartController : Controller
    {
         private readonly WebshopContext _context;
        //  public const string SessionKeyName = "_Name";
        //  public string SessionInfo_Name { get; private set; }

        public CartController(WebshopContext context)
        {
            _context = context;
        }
        [Route("index")]
        public IActionResult Index()
        {
            var cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
            ViewBag.cart = cart;
            ViewBag.total = cart.Sum(item => item.Product.Price * item.Quantity);
            return View();
        }

        [Route("buy/{id}")]
        public IActionResult Buy(int id)
        {
            Productwaarde productModel = new Productwaarde();
            if (SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart") == null)
            {
                List<Item> cart = new List<Item>();
                cart.Add(new Item { Product = _context.Productwaarde.Find(id), Quantity = 1 });
                SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            }
            else
            {
                List<Item> cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
                int index = isExist(id);
                if (index != -1)
                {
                    cart[index].Quantity++;
                }
                else
                {
                    cart.Add(new Item { Product =  _context.Productwaarde.Find(id),  Quantity = 1 });
                }
                SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            }
            return RedirectToAction("Index");
        }

        [Route("remove/{id}")]
        public IActionResult Remove(int id)
        {
            List<Item> cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
            int index = isExist(id);
            cart.RemoveAt(index);
            SessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
            return RedirectToAction("Index");
        }

        private int isExist(int id)
        {
            List<Item> cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
            for (int i = 0; i < cart.Count; i++)
            {
                if (cart[i].Product.Id.Equals(id))
                {
                    return i;
                }
            }
            return -1;
        }


        public IActionResult checkOut()
        {
            var cart = SessionHelper.GetObjectFromJson<List<Item>>(HttpContext.Session, "cart");
            ViewBag.cart = cart;
            ViewBag.total = cart.Sum(item => item.Product.Price * item.Quantity);

            return View("checkOut");

        }

        [Route("pay")]   
         public IActionResult pay(string msg)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("a.alhalim94@gmail.com"));
            message.To.Add(new MailboxAddress("a.alhalim94@gmail.com"));
            message.Subject = "Your order";
            message.Body = new TextPart("html"){
                Text= "From: " + "<br>" + msg
            };
            using (var client = new SmtpClient()){
                client.Connect("smtp.gmail.com", 587);
                client.Authenticate("a.alhalim94@gmail.com", "1.Newnew");
                client.Send(message);
                client.Disconnect(false);
            }
            return View();

        }
    }
}