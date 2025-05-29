using System;
using System.Security.Cryptography.X509Certificates;
using api.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {

        public required DbSet<Product> Products { get; set; }

        public required DbSet<Basket> Baskets { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>()
                .HasData(
                    new IdentityRole { Id = "159cd083-8474-4fd3-a002-bb2658b0da62", Name = "Member", NormalizedName = "MEMBER" },
                    new IdentityRole { Id = "081de3b3-07c4-48ed-9b4c-960a9fb72640", Name = "Admin", NormalizedName = "ADMIN" }
                );
        }

    }
}