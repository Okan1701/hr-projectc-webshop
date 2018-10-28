using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace klaas.Migrations
{
    public partial class ImprovedModel1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Productsoort",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Naam = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productsoort", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Attribuutsoort",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Attrbuut = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    ProductsoortId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attribuutsoort", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Attribuutsoort_Productsoort_ProductsoortId",
                        column: x => x.ProductsoortId,
                        principalTable: "Productsoort",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Productwaarde",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Title = table.Column<string>(nullable: true),
                    Price = table.Column<double>(nullable: false),
                    ProductsoortId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productwaarde", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Productwaarde_Productsoort_ProductsoortId",
                        column: x => x.ProductsoortId,
                        principalTable: "Productsoort",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Attribuutwaarde",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Waarde = table.Column<string>(nullable: true),
                    ProductwaardeId = table.Column<int>(nullable: false),
                    AttribuutsoortId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attribuutwaarde", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Attribuutwaarde_Attribuutsoort_AttribuutsoortId",
                        column: x => x.AttribuutsoortId,
                        principalTable: "Attribuutsoort",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Attribuutwaarde_Productwaarde_ProductwaardeId",
                        column: x => x.ProductwaardeId,
                        principalTable: "Productwaarde",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Attribuutsoort_ProductsoortId",
                table: "Attribuutsoort",
                column: "ProductsoortId");

            migrationBuilder.CreateIndex(
                name: "IX_Attribuutwaarde_AttribuutsoortId",
                table: "Attribuutwaarde",
                column: "AttribuutsoortId");

            migrationBuilder.CreateIndex(
                name: "IX_Attribuutwaarde_ProductwaardeId",
                table: "Attribuutwaarde",
                column: "ProductwaardeId");

            migrationBuilder.CreateIndex(
                name: "IX_Productwaarde_ProductsoortId",
                table: "Productwaarde",
                column: "ProductsoortId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Attribuutwaarde");

            migrationBuilder.DropTable(
                name: "Attribuutsoort");

            migrationBuilder.DropTable(
                name: "Productwaarde");

            migrationBuilder.DropTable(
                name: "Productsoort");
        }
    }
}
