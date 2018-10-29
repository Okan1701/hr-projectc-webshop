using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace klaas.Models
{
    public class WebshopContext : IdentityDbContext<Users>
    {
        public WebshopContext (DbContextOptions<WebshopContext> options)
            : base(options)
        {
        }

        public DbSet<klaas.products.Products> Products { get; set; }
        public DbSet<klaas.products.Extra_Atributes> Extra_Atributes {get; set;}
        public DbSet<klaas.products.Productsoort> Productsoort {get; set;}
        public DbSet<klaas.products.Productwaarde> Productwaarde {get; set;}
        public DbSet<klaas.products.Attribuutsoort> Attribuutsoort {get; set;}
        public DbSet<klaas.products.Attribuutwaarde> Attribuutwaarde {get; set;}

    }
}